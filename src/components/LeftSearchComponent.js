import '../styles/LeftSearchComponent.css'
import OneWayTabContent from './OneWayTabContent';
import ReturnTabContent from './ReturnTabContent';
import Tab from './Tab';

const LeftSearch = ({onSearchClick}) => {

    const tabContent = [
        {
            title: "One Way",
        content: <OneWayTabContent onSearchClick={onSearchClick} />
        },
        {
            title: "Return",
          content: <ReturnTabContent onSearchClick={onSearchClick} />
        }
    ]
    return (
        <div className="row text-left">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab.content}
                </Tab.TabPane>
              ))}
            </Tab>
        </div>
    )
}

export default LeftSearch;