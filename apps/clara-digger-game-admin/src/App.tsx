import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GhostList } from "./ghost/GhostList";
import { GhostCreate } from "./ghost/GhostCreate";
import { GhostEdit } from "./ghost/GhostEdit";
import { GhostShow } from "./ghost/GhostShow";
import { ClaraList } from "./clara/ClaraList";
import { ClaraCreate } from "./clara/ClaraCreate";
import { ClaraEdit } from "./clara/ClaraEdit";
import { ClaraShow } from "./clara/ClaraShow";
import { LevelList } from "./level/LevelList";
import { LevelCreate } from "./level/LevelCreate";
import { LevelEdit } from "./level/LevelEdit";
import { LevelShow } from "./level/LevelShow";
import { GoldSackList } from "./goldSack/GoldSackList";
import { GoldSackCreate } from "./goldSack/GoldSackCreate";
import { GoldSackEdit } from "./goldSack/GoldSackEdit";
import { GoldSackShow } from "./goldSack/GoldSackShow";
import { LeafList } from "./leaf/LeafList";
import { LeafCreate } from "./leaf/LeafCreate";
import { LeafEdit } from "./leaf/LeafEdit";
import { LeafShow } from "./leaf/LeafShow";
import { EarthPatchList } from "./earthPatch/EarthPatchList";
import { EarthPatchCreate } from "./earthPatch/EarthPatchCreate";
import { EarthPatchEdit } from "./earthPatch/EarthPatchEdit";
import { EarthPatchShow } from "./earthPatch/EarthPatchShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Clara-Digger-Game"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ghost"
          list={GhostList}
          edit={GhostEdit}
          create={GhostCreate}
          show={GhostShow}
        />
        <Resource
          name="Clara"
          list={ClaraList}
          edit={ClaraEdit}
          create={ClaraCreate}
          show={ClaraShow}
        />
        <Resource
          name="Level"
          list={LevelList}
          edit={LevelEdit}
          create={LevelCreate}
          show={LevelShow}
        />
        <Resource
          name="GoldSack"
          list={GoldSackList}
          edit={GoldSackEdit}
          create={GoldSackCreate}
          show={GoldSackShow}
        />
        <Resource
          name="Leaf"
          list={LeafList}
          edit={LeafEdit}
          create={LeafCreate}
          show={LeafShow}
        />
        <Resource
          name="EarthPatch"
          list={EarthPatchList}
          edit={EarthPatchEdit}
          create={EarthPatchCreate}
          show={EarthPatchShow}
        />
      </Admin>
    </div>
  );
};

export default App;
