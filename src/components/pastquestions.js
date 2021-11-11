import React from 'react';
import BriefQuestion from './BriefQuestion';

function BriefQuestionsList(props) {
	
	const {emptyListNote} = props;

	const { idsList } = props;
	return (
		<span>
	
WOULD U RATHER??
		
			{idsList.length ? (
				idsList.map((id) => <BriefQuestion key={id}/>)
			) : (
				<p className="text-center">{emptyListNote}</p>
			)}
		</span>
	);
}

export default BriefQuestionsList;