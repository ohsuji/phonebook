import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
	const { contactList, keyword } = useSelector((state) => state);
	const [filteredList, setFilteredList] = useState([]);

	useEffect (() => {
		if (keyword !== ''){
			let book = contactList.filter((item) => item.name.includes(keyword));
			setFilteredList(book);
		} else {
				setFilteredList(contactList);
		}
	}, [keyword, contactList]);

	return (
		<div>
			<SearchBox />
				<div>
					인원 : {filteredList.length} 명
					{filteredList.map((item) => (
					<ContactItem item={item} />
					//item={item} 바로 자식으로 보낼때는 굳이 리덕스까지 쓸 필요는 없어서 props
					))}
				</div>
		</div>
	);
};

export default ContactList;
