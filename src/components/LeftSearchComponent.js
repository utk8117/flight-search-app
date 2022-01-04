import '../styles/LeftSearchComponent.css'
import OneWayTabContent from './OneWayTabContent';
import ReturnTabContent from './ReturnTabContent';
import Tab from './Tab';

function LeftSearch() {

    const tabContent = [
        {
            title: "One Way",
            content: <OneWayTabContent/>
        },
        {
            title: "Return",
            content: <ReturnTabContent/>
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