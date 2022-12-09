import { React, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";

const SearchBox = () => {
	const [keyword, setKeyword] = useState();
	let dispatch = useDispatch();

	const searchByName = (e) => {
		e.preventDefault();
		dispatch({type: 'SEARCH_BY_NAME', payload: {keyword}})
	}
	return (
		<form action="" className={style.form} onSubmit={searchByName}>
			<Row>
				<Col xs>
					<Form.Control type="text" placeholder="이름" onChange={(e) => setKeyword(e.target.value)} />
				</Col>
				<Col xs="auto">
					<Button variant="dark" type="submit">
						찾기
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default SearchBox;
