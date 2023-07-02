import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  AccountSetting,
  Chat,
  Community,
  DeactiveAccount,
  ExploredCommunity,
  Followers,
  Help,
  Home,
  ItemView,
  Login,
  MarketPlace,
  Password,
  PostView,
  Privacy,
  Profile,
  Regsiter,
  Saved,
  SecurityAndAccess,
  Settings,
  VideoPlayWrap,
  Videos,
  YourInfo,
} from "./pages";
import { BottomNav, InternetStatus, Navbar, ScrollTop } from "./components";
import { ThemeProvider } from "styled-components";
import { BlurBg, GlobalStyles } from "./styles/Global";
import { useSelector } from "react-redux";

function App() {
  const theme = {
    tab: "1024px",
    Minitab: "800px",
    mobile: "700px",
    mm: "500px",
    sm: "380px",
    xs: "350",
    sh: "660px",
    colors: {
      orange: "#fca61f",
    },
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <BlurBg style={{ top: "-1%", right: "5rem" }} />
        <BlurBg style={{ top: "36%", left: "2rem" }} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Regsiter />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/video/:videoId" element={<VideoPlayWrap />} />
          <Route path="/messages" element={<Chat />} />
          <Route path="/store" element={<MarketPlace />} />
          <Route path="/store/:title" element={<ItemView />} />
          <Route path="/users" element={<Followers />} />
          <Route path="/community" element={<Community />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/:username/status/:postId" element={<PostView />} />
          <Route
            path="/community/:communityId"
            element={<ExploredCommunity />}
          />
          <Route path="/setting/account" element={<AccountSetting />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/setting/account/password" element={<Password />} />
          <Route
            path="/setting/account/deactivate"
            element={<DeactiveAccount />}
          />
          <Route
            path="/setting/account/your_information"
            element={<YourInfo />}
          />
          <Route
            path="/setting/security_and_account_access"
            element={<SecurityAndAccess />}
          />
          <Route path="/setting/privacy_and_safty" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <ScrollTop />
        {/* <InternetStatus /> */}
        <BottomNav />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
