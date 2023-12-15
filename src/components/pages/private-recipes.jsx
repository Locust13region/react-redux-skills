import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../store/list-slice";
import Spinner from "../spinner/spinner";

const PrivateRecipes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList("/recipes"));
	}, [dispatch]);

	const { listItems, loading } = useSelector((state) => state.list);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<h4>Private page</h4>
			<div className="list">
				{listItems.map(({ title, body }, index) => {
					return (
						<div
							key={index}
							className="listItemRecipes"
						>
							<div className="itemTitle">{title}</div>
							<div className="itemDescription">{body}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default PrivateRecipes;
