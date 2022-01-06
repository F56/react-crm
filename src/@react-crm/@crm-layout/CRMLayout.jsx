import {
  Layout,
  Menu,
  Button,
  Tooltip,
  PageHeader,
} from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import routes from "../@routes/routes";
import {
  SearchOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

const CRMLayout = ({ children }) => {
  const [collapse, setCollapse] = React.useState(true);
  const [currentKey, setCurrentKey] = React.useState(0);
  const [notesOpen, setNotesOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]);

  const toggle = () => {
    setCollapse(!collapse);
  };

  const addNote = () => {
    setNotes([...notes, { title: "New Note", content: "New Note Content" }]);
  };

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        collapsible
        collapsed={collapse}
        onCollapse={toggle}
        theme="light"
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["0"]}
          onSelect={(e) => setCurrentKey(e.key)}
          className="tw-sticky tw-top-0"
        >
          {routes.map((route, index) => (
            <Menu.Item
              key={index}
              onClick={() => {
                navigate(route.path);
              }}
              icon={<route.icon />}
              className="tw-text-sm"
            >
              {route.name}
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Sider>

      <Layout
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <PageHeader
          title="codelift"
          style={{ borderBottom: "1px solid #e8e8e8" }}
          extra={
            <>
              <Tooltip title="Search">
                <Button
                  type="primary"
                  shape="circle"
                  className="tw-bg-primary"
                  icon={<SearchOutlined />}
                />
              </Tooltip>
              <Tooltip title="Notes">
                <Button
                  type="primary"
                  shape="circle"
                  className="tw-bg-primary"
                  icon={<FileAddOutlined />}
                  onClick={() => setNotesOpen((prev) => !prev)}
                />
              </Tooltip>
            </>
          }
        />
        <Layout.Content style={{ position: "relative" }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default CRMLayout;
