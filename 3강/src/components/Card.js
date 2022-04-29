import './Card.css';


/**
 *
 * props.children
 * 열고 닫는 태그 사이에 있는 컴포넌트입니다.
 * Card 컴포넌트 태그 사이에 있는 컴포넌트들이 children입니다.
 */
function Card(props) {
    /*
       ExpenseItem에서 className으로 expense-item을 주고 있기 때문에
       props.className을 가져다가 사용할 수 있다.
     */
    const classes = 'card ' + props.className;
    console.log(classes);
    return <div className={classes}>{props.children}</div>
}

export default Card;