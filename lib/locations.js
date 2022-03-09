const locations = [
    {
        id: 0,
        type: "RESTAURANT",
        name: "Restaurant Food",
        text: "Cum pellentesque nisi sit facilisi suspendisse. Aliquet egestas at morbi ultricies euismod scelerisque. Malesuada rhoncus feugiat gravida adipiscing.",
        address: "Jean Street 21105",
        email: "email.address@gmail.com",
        phone: "076 027 41 51",
        work_hours: [{day: "Måndag", time:"09:00 - 17:00"},{day: "Tisdag", time:"09:00 - 17:00"},{day: "Onsdag", time:"09:00 - 17:00"},{day:"Torsdag", time: "09:00 - 17:00"},{day:"Fredag", time: "09:00 - 17:00"},{day: "LÖRDAG", time:"12:00 - 17:00"},{day:"SÖNDAG", time:"12:00 - 17:00"}],
        image: "/images/restaurant.png"
    },
    {
        id: 1,
        type: "KITCHEN",
        name: "Kitchen Restaurant",
        text: "Ante a lacus, amet proin. Auctor turpis fermentum posuere tortor, diam sit cursus sit. Porttitor felis facilisis est amet, adipiscing vitae. Ac justo, convallis sed.",
        address: "Downstreet 20152",
        email: "email.address@gmail.com",
        phone: "076 512 51 12",
        work_hours: [{day: "Måndag", time:"09:00 - 17:00"},{day: "Tisdag", time:"09:00 - 17:00"},{day: "Onsdag", time:"09:00 - 17:00"},{day:"Torsdag", time: "09:00 - 17:00"},{day:"Fredag", time: "09:00 - 17:00"},{day: "LÖRDAG", time:"12:00 - 17:00"},{day:"SÖNDAG", time:"12:00 - 17:00"}],
        image: "/images/kitchen.png"
    }
]

export function getLocationsData() {
    return locations
}