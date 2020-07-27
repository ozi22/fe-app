import { NextPage, NextPageContext } from 'next';
import React, { useEffect, useState } from 'react';
import ErrorPage from '../_error';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import PostsService from '../../services/posts/posts.service';
import PostsDuck from '../../redux/posts/posts.duck';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { H1 } from '../../components/globals';
import { useTranslation } from '../../../i18n';
import MyForm from '../../components/Form';

type Query = {
  id: string;
};

interface IPost {
  query: Query;
  initialFirstRender: boolean;
  dispatch?: Dispatch;
  selectedPost: any;
}

const Post: NextPage<IPost> = ({ query, dispatch, initialFirstRender = true }) => {
  const { t } = useTranslation();
  const [firstRender, setFirstRender] = useState(initialFirstRender);

  const empty = isEmpty(query);
  const stringID = get(query, 'id', null);

  if (empty || isNaN(stringID) || stringID === null) return <ErrorPage statusCode={404} />;

  useEffect(() => {
    if (firstRender)
      PostsService.getPost(parseInt(stringID)).then(({ data }) => dispatch(PostsDuck.setSelectedPost(data)));
    setFirstRender(false);
  }, []);

  return (
    <Main>
      <Navigation />
      <H1>{t('detail')}</H1>
      <MyForm permission="edit" />
    </Main>
  );
};

const MapStateToProps = (state: any) => ({
  selectedPost: PostsDuck.getSelectedPost(state)
});

Post.getInitialProps = async ({ store, query, res, asPath, req }: NextPageContext): Promise<any> => {
  let initialFirstRender = true;
  const empty = isEmpty(query);
  const stringID = get(query, 'id', null);

  if (!empty && !isNaN(stringID) && stringID !== null) {
    try {
      const { data, status } = await PostsService.getPost(parseInt(stringID));
      if (status === 200 && data) {
        store.dispatch(PostsDuck.setSelectedPost(data));
        initialFirstRender = false;
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    initialFirstRender = false;
  }
  return {
    namespacesRequired: ['common'],
    query,
    initialFirstRender
  };
};

export default connect(MapStateToProps)(Post);
