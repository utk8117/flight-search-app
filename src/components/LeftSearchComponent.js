import '../styles/LeftSearchComponent.css'
import OneWayTabContent from './OneWayTabContent';
import ReturnTabContent from './ReturnTabContent';
import Tab from './Tab';

const LeftSearch = ({onSearchClick, price, setPrice}) => {

    const tabContent = [
        {
            title: "One Way",
        content: <OneWayTabContent onSearchClick={onSearchClick}
          price={price} setPrice={setPrice} />
        },
        {
            title: "Return",
          content: <ReturnTabContent onSearchClick={onSearchClick}
          price={price} setPrice={setPrice} />
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