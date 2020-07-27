import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useTranslation, Link } from '../../i18n';
import Main from '../components/Main';
import PostsService from '../services/posts/posts.service';
import PostsDuck from '../redux/posts/posts.duck';
import Navigation from '../components/Navigation';
import { SC } from '../styles/theme';
import Posts from '../components/Posts';
import { Button, Container, FlexRow, H1 } from '../components/globals';

type IComponentProps = {
  namespacesRequired: string[];
  dispatch?: Dispatch;
  allPosts?: any;
  initialFirstRender?: boolean;
};

const Index: NextPage<IComponentProps & SC> = ({ dispatch, allPosts, initialFirstRender = true }) => {
  const { t } = useTranslation();

  const [firstRender, setFirstRender] = useState(initialFirstRender);

  useEffect(() => {
    if (firstRender) PostsService.getAllPosts().then(({ data }) => dispatch(PostsDuck.setAllPosts(data)));
    setFirstRender(false);
  }, []);

  return (
    <Main>
      <Navigation />
      <H1>{t('itemsList')}</H1>
      <Container>
        <FlexRow style={{ marginBottom: '12px', justifyContent: 'flex-end' }}>
          <Link href={`/add`} as={`/add`}>
            <Button>{t('addNewItem')}</Button>
          </Link>
        </FlexRow>
      </Container>
      <Posts allPosts={allPosts} />
    </Main>
  );
};

const MapStateToProps = (state: any) => ({
  allPosts: PostsDuck.getAllPosts(state)
});

Index.getInitialProps = async (ctx) => {
  const { store, query, asPath } = ctx as any;
  let initialFirstRender = true;

  try {
    const { data, status } = await PostsService.getAllPosts();
    if (status === 200 && data) {
      store.dispatch(PostsDuck.setAllPosts(data));
      initialFirstRender = false;
    }
  } catch (e) {
    console.log(e);
  }

  return {
    namespacesRequired: ['common'],
    initialFirstRender
  };
};

export default connect(MapStateToProps)(Index);
