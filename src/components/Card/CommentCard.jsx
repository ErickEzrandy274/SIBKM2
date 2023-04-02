import React from "react";

const CommentCard = ({ content, created_at }) => {
	return (
		<div className="p-3 bg-secondary text-white rounded-4">
			<p className="m-0">{content}</p>
			<p className="m-0 text-end">created at {created_at}</p>
		</div>
	);
};

export default CommentCard;
