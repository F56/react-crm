import { Layout, Typography } from "antd";

const CRMPage = ({ headerTitle, content, footer, sider }) => {
  return (
    <Layout className="tw-h-[100%] tw-relative">
      <Layout.Header className="tw-h-[200px] tw-absolute tw-w-[100%] tw-z-10 tw-flex tw-flex-col tw-justify-center">
        <Typography.Text className="tw-text-white tw-text-lg">
          Hello
        </Typography.Text>
      </Layout.Header>
      <Layout.Content className="tw-h-[100%] tw-mx-10 tw-mt-40 tw-mb-10 tw-bg-white tw-z-20 tw-rounded-lg tw-p-5 tw-shadow-sm">
        {content}
      </Layout.Content>
      
    </Layout>
  );
};

export default CRMPage;
