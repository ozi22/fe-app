import React, { FC } from 'react';
import Head from 'next/head';
import { SC } from '../../styles/theme';
import { useTranslation } from '../../../i18n';

const Main: FC<SC> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content="description" />
        <link rel="shortcut icon" href={`/public/favicon.ico`} />
      </Head>
      <>{children}</>
    </>
  );
};

export default Main;
