import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Top} from './tsx/views/pages/Top.jsx';
import {QuestPage} from './tsx/views/pages/QuestPage.jsx';
import {GachaSimulatorPage} from './tsx/views/pages/GachaSimulatorPage.jsx';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/quest' element={<QuestPage />} />
          <Route path='/gacha' element={<GachaSimulatorPage />} />
        </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
