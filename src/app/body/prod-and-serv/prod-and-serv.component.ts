import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-prod-and-serv',
  imports: [NgFor],
  templateUrl: './prod-and-serv.component.html',
  styleUrl: './prod-and-serv.component.css'
})
export class ProdAndServComponent {
    products = [
    {
      id: 1,
      title: 'Policy and Research Dialogue',
      description: 'High-level policy discussions and research engagement platforms for evidence-based decision-making.'
    },
    {
      id: 2,
      title: 'Training Workshops and Short Courses',
      description: 'Capacity-building programs tailored for professionals, institutions and emerging leaders.'
    },
    {
      id: 3,
      title: 'Research Programs',
      description: 'Long-term multidisciplinary research initiatives addressing regional and global challenges.'
    },
    {
      id: 4,
      title: 'System Strengthening Courses',
      description: 'Programs designed to enhance governance systems, institutional performance and sustainability.'
    },
    {
      id: 5,
      title: 'Consultancy Services',
      description: 'Expert advisory services supporting policy design, evaluation and strategic development.'
    }
  ];

  onProductClick(product: any) {
    console.log('Future navigation to:', product.title);
  }
  
}
