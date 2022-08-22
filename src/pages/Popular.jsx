import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import TabContent from '../components/TabContent';
import TabContentPlaceholder from '../components/TabContentPlaceholder';
import LangSelector from '../components/LangSelector';
import { fetchPopularRepos } from '../api';

// Languages list
const LANGUAGES = ['All', 'Javascript', 'CSS', 'Python', 'Java', 'Ruby'];

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeLang, setActiveLang] = useState(searchParams.get('lang') || LANGUAGES[0]);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleTabSwitch = (lang) => {
        setActiveLang(lang);
        setSearchParams({lang: lang});
    }

    useEffect(() => {
        setIsLoading(true);
        const getData = setTimeout(() => {
            fetchPopularRepos(activeLang)
                .then((data) => {
                    setItems(data);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }, 1000);
        return () => clearTimeout(getData)
    }, [activeLang]);

    return (
        <>
            <LangSelector handleTabSwitch={handleTabSwitch} LANGUAGES={LANGUAGES} activeLang={activeLang} />
            <div className="content-tab">
                {items.length && !isLoading
                    ? <TabContent items={items} />
                    : <TabContentPlaceholder isLoading={isLoading} />
                }
            </div>
        </>
    );
}

export default Popular;