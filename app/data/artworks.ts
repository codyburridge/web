// Every artwork by collection. Used by the Contact page's enquiry dropdown.
// Keep in step with the artworks listed in each collection page.

export interface EnquiryGroup {
  collection: string
  works: string[]
}

export const ENQUIRY_GROUPS: EnquiryGroup[] = [
  { collection: "The Convention", works: ["Fag Break", "For Rent", "No Parking", "Waiting For Batman", "I Am Sure He Said 214", "No Standing", "Chained to the Job", "Stand Pipe", "Lost Bunny", "Did You Hear Something?", "Shadow of Doubt", "Delayed"] },
  { collection: "A Different View", works: ["Off Grid", "Pool Corner 1", "Yellow Sweep", "Going Home", "Kate's Brother Light", "Just Leaving"] },
  { collection: "The Magic Hour", works: ["Bruno's Garage", "Late Night Bar", "24/24", "Night Swimming", "Le Clerc Carmeaux", "Car Wash", "Esso Expresso", "The Magic Hour", "Green Dream", "Blue Gazole", "La Laverie", "Petrol Station, London"] },
  { collection: "Green vs Grey", works: ["Grey #1", "Green #1", "Grey #2", "Green #2", "Green #4", "Grey #3", "Green #3", "Grey #4"] },
  { collection: "In Time We Rust", works: ["Mustard Underneath", "Drip Lines", "Songlines", "Single Yellow", "Rust in Time", "A Fleck of Green", "Klien Blue", "No 32"] },
  { collection: "Neon Numbers", works: ["Blue Water", "Plus Two Hundred", "Green Cable", "Orange Twenty-Four", "Minus Twenty-Eight, Minus Thirty-Five", "Orange Sixty-Four"] },
  { collection: "End of an Easel", works: ["Exhibition 001", "Exhibition 003", "Exhibition 007", "Exhibition 005", "Exhibition 009", "Exhibition 011", "Exhibition 013", "Exhibition 015"] },
  { collection: "Reminiscence", works: ["Auguste and the Harlequin (The Clown)", "Vivian (Portrait of a Photographer)"] },
  { collection: "Psychedelic", works: ["Psychedelic Trellick #Orange", "Psychedelic Power Station #1", "Psychedelic Dixon", "Psychedelic Bruno"] },
  { collection: "The Book", works: ["A Different View: Volume 1"] },
  { collection: 'Exhibitions', works: ['Altered State (2023)', 'The Magic Hour (2022)'] },
]
