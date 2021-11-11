import React from 'react';
import BriefQuestion from './BriefQuestion';

function BriefQuestionsList(props) {
	
	const {emptyListNote} = props;

	const { idsList } = props;
	return (
		<dev>
	
	<dev>
WOULD U RATHER??
		
			{idsList.length ? (
				idsList.map((id) => <BriefQuestion key={id} id={id} />)
			) : (
				<p className="text-center">{emptyListNote}</p>
			)}
		</dev>
		</dev>
	);
}

export default BriefQuestionsList;