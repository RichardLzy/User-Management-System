import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel } from 'umi';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import AvatarDropdown from "./AvatarDropdown";
import { EMPTY_LINK } from '@/constants';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="placeholder"
        // defaultValue="default value"
        options={[
          {
            label: <a href={EMPTY_LINK}>option1</a>,
            value: 'option1',
          },
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <span
        className={styles.action}
        onClick={() => {
          window.open(EMPTY_LINK);
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <AvatarDropdown menu />
    </Space>
  );
};

export default GlobalHeaderRight;
