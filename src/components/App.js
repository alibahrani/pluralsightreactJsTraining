import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider initialLoggedInUser="Ali">
      <Layout startingTheme="light">
        <Header />
        <Speakers />
      </Layout>
    </AuthProvider>
  );
}

export default App;
