import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./shared/components/Header/header.tsx";

import HomeView from "./features/music/HomeView";
import AuthView from "./features/auth/AuthView";
import ProfileView from "./features/profile/ProfileView.tsx";
import ArtistView from './features/music/ArtistView.tsx';
import TrackView from './features/music/TrackView.tsx';
import PlaylistView from "./features/music/PlaylistView.tsx";
import UpgradeView from './features/upgrade/UpgradeView.tsx';
import NotFoundView from './shared/views/NotFoundView.tsx';
import Footer from "./shared/components/Footer/Footer.tsx";

import { ProtectedRoute } from './shared/router/ProtectedRoute.tsx'
import AppLayout from "./shared/app/AppLayout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppLayout>
        <main className='relative z-10 flex-1 '>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/auth" element={<AuthView />} />

            <Route path="/profile"
              element={
                <ProtectedRoute>
                  <ProfileView />
                </ProtectedRoute>
              }
            />
            <Route path="/artist/:id" element={<ArtistView />} />
            <Route path="/playlist/:id" element={<PlaylistView />} />
            <Route path="/track/:id" element={<TrackView />} />
            <Route path="/upgrade" element={<UpgradeView />} />

            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </main>
        <Footer />
      </AppLayout>
    </BrowserRouter >
  )
}

export default App
