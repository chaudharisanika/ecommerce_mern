import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
              <h3 style={{textAlign:"center",fontFamily:"serif",fontWeight:"bolder",fontSize:"70px"}}>Welcome {auth?.user?.name}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;