import React from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { useTranslation } from '../../i18n';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import { SC } from '../styles/theme';
import { H1 } from '../components/globals';
import MyForm from '../components/Form';

type IComponentProps = {
  namespacesRequired: string[];
};

const Index: NextPage<IComponentProps & SC> = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <Navigation />
      <H1>{t('addNewItem')}</H1>
      <MyForm permission="create" />
    </Main>
  );
};

Index.getInitialProps = async () => {
  return {
    namespacesRequired: ['common']
  };
};

export default connect(null)(Index);
