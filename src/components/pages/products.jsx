import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../store/list-slice";
import Spinner from "../spinner/spinner";

const Products = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList("/products"));
	}, [dispatch]);

	const { listItems, loading } = useSelector((state) => state.list);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<h4>Common page</h4>
			<div className="list">
				{listItems.map(({ name, description, department }, index) => {
					return (
						<div
							key={index}
							className="listItemProducts"
						>
							<div className="itemTitle">{name}</div>
							<div className="itemDescription">{description}</div>
							<div className="itemDepartment">Department: {department}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Products;
