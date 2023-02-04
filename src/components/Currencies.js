import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Currency from "./Currency";
import CurrencySearch from "./CurrencySearch";

function Currencies() {
    const [currencies, setCurrencies] = useState([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState([]);

    useEffect(() => {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230117&json")
            .then(data => data.json())
            .then(data => {
                setCurrencies(data.map(el => {
                    return {
                    currency: el.txt,
                    rate: el.rate.toFixed(2),
                    exchangedate: el.exchangedate,
                    name:  el.cc,
                    id: el.r030
                    }
                }));
                
            });
    }, [])

    function filterCurrencies(e) {
        let searchValue = e.currentTarget.value.trim().toLowerCase();
        setFilteredCurrencies(currencies.filter(el => {
            return el.currency.toLowerCase().includes(searchValue);
        }));
    }

    return <>
        <CurrencySearch filterCurrencies={filterCurrencies} />
        <Table>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                    <th>Exchangedate</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {(filteredCurrencies.length? filteredCurrencies: currencies).map(currency => <Currency currency={currency} />)}
            </tbody>
        </Table>
    </>
}

export default Currencies