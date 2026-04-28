import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {message, Divider, Space, Tabs} from 'antd';
import React, {useState} from 'react';
import {history} from 'umi';
import {EMPTY_LINK, SYSTEM_LOGO, TITLE} from '@/constants';
import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';
import styles from './index.less';
import {LoginForm, ProFormText} from '@ant-design/pro-form';
import {Link} from "@umijs/preset-dumi/lib/theme";

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');

  // Form submission
  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    // Validation
    if (userPassword !== checkPassword) {
      message.error('The two passwords entered do not match');
      return;
    }

    try {
      // Register
      const id = await register(values);
      if (id) {
        const defaultLoginSuccessMessage = 'Registration successful!';
        message.success(defaultLoginSuccessMessage);

        /** This method will jump to the location of the redirect parameter */
        if (!history) return;
        const {query} = history.location;
        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = 'Registration failed, please try again!';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: 'Register'
            }
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title={TITLE}
          subTitle="Welcome to use"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'Account & Password Registration'}/>
          </Tabs>
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Please enter your account"
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
                placeholder="Please enter your password"
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
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Please re-enter your password"
                rules={[
                  {
                    required: true,
                    message: 'Confirm password is required!',
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
              textAlign: 'right',
            }}
          >
            <Space split={<Divider type="vertical" />}>
              <Link to="/user/login">Login</Link>
            </Space>
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;