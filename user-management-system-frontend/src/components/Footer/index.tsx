import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import { GITHUB_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = 'Copyright Text';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined/> Author GitHub</>,
          href: GITHUB_LINK,
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
