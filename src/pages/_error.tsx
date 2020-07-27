import React from 'react';
// import CustomError from '../components/CustomError';
import { NextPageContext, NextPage } from 'next';
import Error from 'next/error';
import Main from '../components/Main';

interface Props {
  statusCode: number;
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  return (
    <Main>
      <Error statusCode={statusCode} />
    </Main>
  );
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext): Promise<any> => {
  return {
    namespacesRequired: ['common'],
    statusCode: res ? res.statusCode : err ? err.statusCode : 404
  };
};

export default ErrorPage;
