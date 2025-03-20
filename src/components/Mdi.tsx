import { useEffect } from 'react'
import useMdiStore from '../stores/MdiStore'


function Mdi() {
  const { docList, changeTab, removeTab } = useMdiStore();

  useEffect(() => {
    console.log(docList)
  }, [docList]);

  const onClickTab = (tab: string) => {
    changeTab(tab)
  }

  const onCloseTab = (key: string) => {
    removeTab(key)
  }

  return (
    <div className="p-4 flex-grow flex flex-col">
      {docList.map((tab) => (
        <div key={tab.key} className={`${tab.active ? 'visible' : 'hidden'} flex-grow`}>
          {tab.compo}
        </div>
      ))}
      <div className="flex border-t border-gray-300">
        {docList.map((tab) => (
          <div key={tab.key} className="flex items-center">
            <button
              className={`py-2 px-4 ${tab.active ? 'bg-white' : 'bg-gray-200'}`}
              onClick={() => onClickTab(tab.key)}
            >
              {tab.title}
            </button>
            {tab.key === 'Home' ? null : (
            <button
              className="py-2 px-2 bg-red-500 text-white"
              onClick={() => onCloseTab(tab.key)}
            >
              x
            </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mdi