import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ResearchService } from '../../../services/research.service';
import { ProgramsService } from '../../../services/programs.service';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() productId: number | null = null;
  @Output() close = new EventEmitter<void>();

  items: any[] = [];
  loading: boolean = false;
  modalTitle: string = '';
  isClosing: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private researchService: ResearchService,
    private programService: ProgramsService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && this.isOpen && this.productId) {
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.items = [];

    switch (this.productId) {
      case 1:
        this.modalTitle = 'Research Dialogue';
        this.researchService.getAll().subscribe({
          next: (response: any) => {
            this.items = response.data;
            this.loading = false;
          },
          error: (err) => {
            console.error('Error fetching research:', err);
            this.loading = false;
          },
        });
        break;

      case 2:
        this.modalTitle = 'Programs';
        this.programService.getAll().subscribe({
          next: (response: any) => {
            this.items = response.data;
            this.loading = false;
          },
          error: (err) => {
            console.error('Error fetching programs:', err);
            this.loading = false;
          },
        });
        break;
      case 3:
        this.modalTitle = 'Articles';
        this.articlesService.getAll().subscribe({
          next: (response: any) => {
            this.items = response.data;
            this.loading = false;
          },
          error: (err) => {
            console.error('Error fetching articles:', err);
            this.loading = false;
          },
        });
        break;
    }
  }
  onClose() {
    this.isClosing = true;
    setTimeout(() => {
      this.isClosing = false;
      this.close.emit();
    }, 280);
  }
}
