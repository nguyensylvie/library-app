import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BorrowService } from "src/app/services/borrow/borrow.service";
import { Member } from "src/app/services/member/member.model";
import { MemberService } from "src/app/services/member/member.service";

@Component({
  selector: "app-borrow-dialog",
  templateUrl: "./borrow-dialog.component.html",
  styleUrls: ["./borrow-dialog.component.scss"],
})
export class BorrowDialogComponent {
  members: Member[] = [];
  selectedMemberId: number;

  constructor(
    private memberService: MemberService,
    private borrowService: BorrowService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.loadMemberList();
  }

  loadMemberList(): void {
    this.memberService.getAllMembers().subscribe({
      next: (members: Member[]) => {
        this.members = members;
      },
      error: (e: any) => console.error(e),
    });
  }

  onBorrowDocument(): void {
    this.borrowService
      .borrowDocument(this.data.documentId, this.selectedMemberId)
      .subscribe({
        next: () => {
          this.data.borrowedDocument.emit();
        },
        error: (e: any) => console.error(e),
      });
  }
}
