const sectionTitleItems =[
    {
        title: "Events",
        text: "Enim volutpat velit molestie morbi pharetra nam nisi et."
    },
    {
        title: "Our locations",
        text: "Tristique facilisi tortor egestas nulla id amet. Integer in"
    },
    {
        title: "History",
        text: "Enim volutpat velit molestie morbi pharetra nam nisi et."
    },
    {
        title: "About us",
        text: "Sit orci orci velit elementum et est. Non, cursus arcu."
    },
]

export function getSectionTitlesData(title) {
    return sectionTitleItems.find(item => item.title = title)
}