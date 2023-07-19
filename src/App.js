import {
  Layout,
  Avatar,
  Typography,
  Menu,
  Breadcrumb,
  List,
  Space,
  Table,
  Tag,
  Drawer,
} from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./App.css";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashboard", "Dashboard", null),
  getItem("About Us", "About Us", null, [
    getItem("Location 1", "1"),
    getItem("Location 2", "2"),
  ]),
];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const tableData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const breadItems = [
  {
    path: "index",
    title: "Home",
  },
  {
    path: "list",
    title: "List",
  },
];
// function itemRender(route, params, breadItems, paths) {
//   const last = breadItems.indexOf(item) === breadItems.length - 1;
//   return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>;
// }
function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={2} style={{ color: "white" }}>
            Vasanti
          </Title>
          <Avatar
            size={36}
            icon={<UserOutlined />}
            style={{ float: "right" }}
          />
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              items={items}
              defaultSelectedKeys={["Dashboard"]}
              // defaultOpenKeys={["About Us"]}
            ></Menu>
          </Sider>

          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
                items={breadItems}
              />

              <div
                style={{
                  minHeight: 750,
                  padding: 24,
                  backgroundColor: "#fff",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  bordered={true}
                  renderItem={(item, index) => (
                    <div onClick={showDrawer}>
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    </div>
                  )}
                />
                <Table
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design Layout example created by Vasanti.
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default App;
