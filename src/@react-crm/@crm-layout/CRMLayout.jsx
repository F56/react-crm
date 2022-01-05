import {
  Layout,
  Menu,
  Button,
  Tooltip,
  PageHeader,
  Drawer,
  Card,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import routes from "../@routes/routes";
import {
  SearchOutlined,
  FileAddOutlined,
  PlusOutlined,
  DeleteOutlined,
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
        >
          {routes.map((route, index) => (
            <Menu.Item
              key={index}
              onClick={() => {
                navigate(route.path);
              }}
              icon={<route.icon />}
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
          title={routes[currentKey].name}
          style={{ borderBottom: "1px solid #e8e8e8" }}
          extra={
            <>
              <Tooltip title="Search">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<SearchOutlined />}
                />
              </Tooltip>
              <Tooltip title="Notes">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<FileAddOutlined />}
                  onClick={() => setNotesOpen((prev) => !prev)}
                />
              </Tooltip>
            </>
          }
        />
        <Layout.Content style={{ position: "relative" }}>
          {children}
          <Drawer
            title="Notes"
            placement="right"
            closable={true}
            onClose={() => setNotesOpen((prev) => !prev)}
            visible={notesOpen}
            getContainer={false}
            style={{ position: "absolute" }}
            mask={false}
            contentWrapperStyle={{
              boxShadow: "none",
              borderLeft: "1px solid #e8e8e8",
            }}
            extra={
              <Button
                type="secondary"
                shape="circle"
                icon={<PlusOutlined />}
                onClick={() => addNote()}
              />
            }
          >
            {notes.map((note, index) => (
              <Card
                actions={[<DeleteOutlined />]}
                key={index}
                style={{ marginBottom: "1rem" }}
              >
                <Typography.Paragraph editable={{ onChange: () => {} }}>
                  Write a Note...
                </Typography.Paragraph>
              </Card>
            ))}
          </Drawer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default CRMLayout;
