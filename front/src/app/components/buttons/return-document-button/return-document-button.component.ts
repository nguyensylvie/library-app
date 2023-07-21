import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BorrowService } from "src/app/services/borrow/borrow.service";

@Component({
  selector: "app-return-document-button",
  templateUrl: "./return-document-button.component.html",
  styleUrls: ["./return-document-button.component.scss"],
})
export class ReturnDocumentButtonComponent {
  @Input() documentId: number;
  @Output() returnedDocument: EventEmitter<void> = new EventEmitter<void>();

  constructor(private borrowService: BorrowService) {}

  onReturnDocument(documentId: number): void {
    this.borrowService.returnDocument(documentId).subscribe({
      next: () => {
        this.returnedDocument.emit();
      },
      error: (e: any) => console.error(e),
    });
  }
}
