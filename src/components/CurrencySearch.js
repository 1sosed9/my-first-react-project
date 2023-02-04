function CurrencySearch(props) {
    return <div className="d-flex justify-content-center">
        <input className="form-control col-6 mb-2" placeholder="Search" onKeyUp={props.filterCurrencies} />
    </div>
}

export default CurrencySearch;