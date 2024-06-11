import React from 'react'
import Css from './FAQV1.module.css'

export default function FAQV1({data}){
    /**
     * so here we set new value show,
     * so when we click on accordin so we can set other accordian to hide
     */
    const [listItem, setListItem] = React.useState(data.map((item) => { item.show = item.id === 1; return item }))

    const setShow = (id) => {
        setListItem((items) => {
            return items.map((item) => {
                const newItem = {...item}
                newItem.show = newItem.id === id ? !newItem.show : false
                return newItem
            })
        })
    }
    return (
        <section className={`w-100 ${Css['faq-sec']} py-4`}>
            <div className="container">
                <h2 className="text-center fw-bold faq-title my-3">
                    Frequently Asked Questions
                </h2>
                <div className={`${Css['accordion']} my-5`}>
                    {
                        listItem.map(({ title, desc, id, show }) => Accordian(title, desc, show, id, setShow) )
                    }
                </div>
            </div>
        </section>
    )
}

const plus = require('./Asset/plus.webp').default
const minus = require('./Asset/minus.webp').default

function Accordian(title, desc, isOpen, id, setShow ) {
    return <div className="accordion-item mb-3" key={id}>
        <h2 className="accordion-header" id={`heading${id}`}>
            <button
                className={`${Css["accordion-button"]} ${isOpen ? Css['open'] : ''}`}
                type="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                onClick={() => setShow(id)}
            >
                <span>
                    {title}
                </span>
                <img src={isOpen ? minus.src : plus.src} alt="" />
            </button>
        </h2>
        <div
            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
        >
            <div className={Css["accordion-body"]}>
                {desc}
            </div>
        </div>
    </div>
}