import * as Sentry from '@sentry/nextjs';
import NextErrorComponent, { ErrorProps as NextErrorProps } from 'next/error';
import { NextPageContext } from 'next';
// import envs from 'helpers/envs';

export type ErrorPageProps = {
  err: Error;
  statusCode: number;
};

export type ErrorProps = {
  isReadyToRender: boolean;
} & NextErrorProps;

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
  const { statusCode, err } = props;
  // eslint-disable-next-line no-debugger

  // the problem is in here. err comes as undefined.
  if (err) {
    Sentry.captureException(err);
  }

  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

ErrorPage.getInitialProps = async (
  props: NextPageContext
): Promise<ErrorProps> => {
  const { res, err, asPath } = props;
  console.log(err);

  const errorInitialProps: ErrorProps =
    (await NextErrorComponent.getInitialProps({
      res,
      err,
    } as NextPageContext)) as ErrorProps;

  errorInitialProps.isReadyToRender = true;

  if (res?.statusCode === 404) {
    return { statusCode: 404, isReadyToRender: true };
  }

  if (err) {
    Sentry.captureException(err);
    await Sentry.flush(2000);
    return errorInitialProps;
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );
  await Sentry.flush(2000);

  return errorInitialProps;
};

export default ErrorPage;
