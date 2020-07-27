import React, { FC } from 'react';
import { SC } from '../../styles/theme';
import { Nav, SelectWrap } from './style';
import { Link, i18n } from '../../../i18n';
import Icon from '../Icon';
import { Icons } from '../Icon/icons';
import Select from 'react-select';
import { Container, FlexRow } from '../globals';

const langOptions: any = [
  { value: 'cs', label: 'CS' },
  { value: 'en', label: 'EN' }
];

const Navigation: FC<SC> = () => {
  return (
    <Nav>
      <Container>
        <FlexRow>
          <Link href={`/`}>
            <a>
              <Icon name={Icons.Home} />
            </a>
          </Link>
          <SelectWrap>
            <Select
              name="lang"
              options={[
                { value: 'cs', label: 'CS' },
                { value: 'en', label: 'EN' }
              ]}
              onChange={(e) => i18n.changeLanguage(e.value)}
              defaultValue={langOptions[0]}
            />
          </SelectWrap>
        </FlexRow>
      </Container>
    </Nav>
  );
};

export default Navigation;
