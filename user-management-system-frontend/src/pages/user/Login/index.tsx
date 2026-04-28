import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Alert, Divider, message, Space, Tabs} from 'antd';
import React, {useState} from 'react';
import {ProFormCheckbox, ProFormText, LoginForm} from '@ant-design/pro-form';
import {history, useModel} from 'umi';
import {EMPTY_LINK, SYSTEM_LOGO, TITLE} from '@/constants';
import Footer from '@/components/Footer';
import {login} from '@/services/ant-design-pro/api';
import styles from './index.less';
import {Link} from "@umijs/preset-dumi/lib/theme";

const LoginMessage: React.FC<{
  content: string;
}> = ({content}) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const {initialState, setInitialState} = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s) => ({...s, currentUser: userInfo}));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // Login
      const user = await login({...values, type});

      if (user) {
        const defaultLoginSuccessMessage = 'Login successful!';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** This method will jump to the location of the redirect parameter */

        if (!history) return;
        const {query} = history.location;
        const {redirect} = query as {
          redirect: string;
        };
        
        // history.push(redirect || '/');
        if (!redirect || redirect.includes('/user/login')) {
                history.push('/');
                return;
              }
        history.push(redirect);
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = 'Login failed, please try again!';
      message.error(defaultLoginFailureMessage);
    }
  };

  const {status, type: loginType} = userLoginState;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: 'Login'
            }
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title={TITLE}
          subTitle="Welcome to use"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'Account & Password Login'}/>
          </Tabs>
          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'Incorrect account or password'}/>
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="admin"
                rules={[
                  {
                    required: true,
                    message: 'Account is required!',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="12345678"
                rules={[
                  {
                    required: true,
                    message: 'Password is required!',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: 'Length cannot be less than 8 characters',
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <Space split={<Divider type="vertical" />}>
              <ProFormCheckbox noStyle name="autoLogin">
                Auto Login
              </ProFormCheckbox>
              <Link to="/user/register">Register</Link>
              <a
                style={{
                  float: 'right',
                }}
                href={EMPTY_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Forgot Password
              </a>
            </Space>
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;