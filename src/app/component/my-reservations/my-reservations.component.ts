import { Component } from '@angular/core';

interface Reservation {
  id: number;
  movie: string;
  date: string;
  time: string;
  seats: number;
}

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent {
  reservations: Reservation[] = [
    { id: 1, movie: 'Avengers: Endgame', date: '2024-05-05', time: '18:00', seats: 2 },
    { id: 2, movie: 'Spider-Man: Far From Home', date: '2024-05-06', time: '15:00', seats: 3 },
    { id: 3, movie: 'Black Panther', date: '2024-05-07', time: '16:00', seats: 1 },
    { id: 4, movie: 'The Shawshank Redemption', date: '2024-05-08', time: '17:30', seats: 2 },
{ id: 5, movie: 'The Godfather', date: '2024-05-09', time: '20:00', seats: 3 },
{ id: 6, movie: 'The Dark Knight', date: '2024-05-10', time: '19:45', seats: 1 },
{ id: 7, movie: '12 Angry Men', date: '2024-05-11', time: '18:15', seats: 2 },
{ id: 8, movie: 'Schindler\'s List', date: '2024-05-12', time: '16:30', seats: 3 },
{ id: 9, movie: 'Pulp Fiction', date: '2024-05-13', time: '21:00', seats: 1 },
{ id: 10, movie: 'The Lord of the Rings: The Return of the King', date: '2024-05-14', time: '14:00', seats: 2 }

  ];

  editModes: { [key: number]: boolean } = {};

  constructor() {
    this.reservations.forEach(reservation => {
      this.editModes[reservation.id] = false;
    });
  }

  toggleEditMode(id: number) {
    this.editModes[id] = !this.editModes[id];
  }

  updateReservation(reservation: Reservation) {
    // Implement your update logic here
    console.log('Updating reservation:', reservation);
    this.toggleEditMode(reservation.id); // Toggle back to view mode after updating
  }

  deleteReservation(reservation: Reservation) {
    // Implement your delete logic here
    console.log('Deleting reservation:', reservation);
  
    // Filter out the reservation to be deleted
    this.reservations = this.reservations.filter(r => r.id !== reservation.id);
  }
  
  

  saveChanges(id: number) {
    // Implement your save logic here
    console.log('Saving changes for reservation:', id);
  }

  goToMyReservations() {
    // Implement navigation logic here
    console.log('Navigating to My Reservations');
  }
}
