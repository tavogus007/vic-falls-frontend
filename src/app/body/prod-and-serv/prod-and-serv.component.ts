import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-prod-and-serv',
  imports: [NgFor, ModalComponent],
  templateUrl: './prod-and-serv.component.html',
  styleUrl: './prod-and-serv.component.css'
})
export class ProdAndServComponent {
    products = [
    {
      id: 1,
      title: 'Research Dialogue',
      description: 'High-level policy discussions and research engagement platforms for evidence-based decision-making.'
    },
    {
      id: 2,
      title: 'Programs',
      description: 'Capacity-building programs tailored for professionals, institutions and emerging leaders.'
    },
    {
      id: 3,
      title: 'Articles',
      description: 'Long-term multidisciplinary research initiatives addressing regional and global challenges.'
    }
  ];

  modalOpen: boolean = false;
  selectedProductId: number | null = null;

  onProductClick(product: any) {
    this.selectedProductId = product.id;
    this.modalOpen = true;
  }
}
