import React, {lazy} from 'react'
import { create } from 'zustand';
import MdiFrame from '../components/MdiFrame';

import Home from '../pages/Home'

interface Imdi {
  key: string
  title: string
  active: boolean
  compo: React.ReactElement
};

interface MdiState {
  docList: Imdi[]
  activeTab: string
  changeTab:(tabKey: string) => void;
  addTab: (tabKey: string) => void;
  removeTab: (tabKey: string) => void;
  setActiveTab: (tabKey: string) => void;
}

const modules = import.meta.glob('../pages/*.tsx');
const components : Record<string, React.LazyExoticComponent<any>> = {};

for (const path in modules) {
  const key = path.replace('../pages/', '').replace('.tsx', '');
  components[key] = lazy(modules[path] as any);
}

const useMdiStore = create<MdiState>((set) => ({
  docList: [
    { key: 'Home', title: 'Home', active: true, compo: React.createElement(MdiFrame, null, React.createElement(Home)) },
  ],
  activeTab: 'home',
  changeTab: (tabKey) => set((state) => {
    return { docList:
      state.docList.map((doc) => {
        if (doc.key === tabKey) {
          return { ...doc, active: true };
        } else {
          return { ...doc, active: false };
        }
      })
    }
  }),
  addTab: (tabKey) => set((state) => {
    if (!state.docList.find(tab => tab.key === tabKey)) {
      console.log("tabKey", tabKey);
      if (components[tabKey]) {
        const compo = React.createElement(MdiFrame, null, React.createElement(components[tabKey]));
        return {
          docList: [
            ...state.docList.map((doc) => {
              return { ...doc, active: false };
            }),
            { key: tabKey, title: tabKey, active: true, compo: compo }
          ]
        };
      }
    }
    return {
      docList: state.docList.map(tab => tab.key === tabKey ? {...tab, active: true} : {...tab, active: false})
    };
  }),
  removeTab: (tabKey: string) => set((state) => {
    if (state.docList.find(tab => tab.key === tabKey)) {
      return {
        docList: state.docList.filter(tab => tab.key !== tabKey)
      };
    }
    return state;
  }),
  setActiveTab: (tabKey: string) => set((state) => ({
    docList: state.docList.map(tab => tab.key === tabKey ? {...tab, active: true} : {...tab, active: false})
  }))
}));

export default useMdiStore;