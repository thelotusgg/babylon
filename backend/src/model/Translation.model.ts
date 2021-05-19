import { AggregateRoot } from "@nestjs/cqrs";
import { Formatting } from "./Formatting.model";

export class Translation extends AggregateRoot {

    language?: string;
    template?: string;
    formatting?: Formatting;
    proposalId?: number;

    constructor(language?: string, template?: string, formatting?: Formatting, proposalId?: number) {
        super();
        this.language = language;
        this.template = template;
        this.formatting = formatting;
        this.proposalId = proposalId;
    }

}