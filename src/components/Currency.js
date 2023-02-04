function Currency(props) {
    return <tr key={props.id}>
        <td>{props.currency.currency}</td>
        <td>{props.currency.rate}</td>
        <td>{props.currency.exchangedate}</td>
        <td>{props.currency.name}</td>
    </tr>;
}

export default Currency;
    
