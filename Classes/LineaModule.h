/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "TiModule.h"
#import "LineaSDK.h"

@interface LineaModule : TiModule 
{
    NSString *current_barcode;
    NSString *current_tracks;
    
    Linea *linea;
}

-(void)barcodeData:(NSString *)barcode type:(int)type;
-(void)magneticCardData:(NSString *)track1 track2:(NSString *)track2 track3:(NSString *)track3;

@end