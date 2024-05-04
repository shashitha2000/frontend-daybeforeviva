import { Injectable } from '@angular/core';
import { Reservation } from '../Model/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [
    { id: 1, movie: 'Movie 1', date: '2024-05-05', time: '15:00', seats: 2 },
    { id: 2, movie: 'Movie 2', date: '2024-05-06', time: '18:00', seats: 3 },
    { id: 3, movie: 'Movie 3', date: '2024-05-07', time: '20:00', seats: 4 }
  ];

  constructor() { }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  deleteReservation(reservation: Reservation) {
    this.reservations = this.reservations.filter(r => r.id !== reservation.id);
  }
}
