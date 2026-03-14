import PageTemplate from './PageTemplate.jsx'
import RoundedCard from './RoundedCard.jsx'

function General() {

  return (
    <>
      <PageTemplate header="Менеджер задач">
        <RoundedCard title="Задачи на сегодня">
					<div></div>
        </RoundedCard>
      </PageTemplate>
    </>
  )
}

export default General
